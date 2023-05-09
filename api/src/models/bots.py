import re
from typing import Any
from langchain import LLMChain, OpenAI, PromptTemplate
import openai 

class BotChat():
    def __init__(self, temperature: float=0.0, verbose: bool=False, *args, **kwargs) -> None:
        # get chain
        # self.bot_chain = LLMChain(
        #     llm=OpenAI(temperature=temperature, max_tokens=1000), 
        #     verbose=verbose
        
        # )
        
        self.model = "text-davinci-003"
        self.max_tokens = 1000
        self.prompt_template = ""

        
    def __call__(self, context:str,  *args: Any, **kwds: Any) -> Any:
        # TODO: Implement in here (namnh)
        
        self.prompt = self.prompt_template + context
        
        resp = openai.Completion.create(
            model=self.model,
            prompt=self.prompt,
            max_tokens=self.max_tokens,
        )
        
        bot_resp = resp.choices[0].text 
        return bot_resp


class BotSummarize():
    def __init__(self, temperature: float=0.0, verbose: bool=False, *args, **kwargs) -> None:
        
        _template = """{prefix}\n\nCONTEXT:\n\n{context}\n{suffix}"""

        # init prompt
        prompt = PromptTemplate(
            input_variables=["prefix", "context", "suffix"], 
            template=_template
        )

        # get chain
        self.bot_chain = LLMChain(
            llm=OpenAI(temperature=temperature, max_tokens=1000), 
            prompt=prompt,
            verbose=verbose
        )

    def prep_output(self, response: str, output_keys: list):
        # Extract summary
        output = {}
        for output_key in output_keys:
            regex_pattern = r"{}:\s*(.*)\s*\n".format(output_key)
            match = re.search(regex_pattern, response)
            if not match:
                regex_pattern = r"{}:\s*(.*)\s*".format(output_key)
                match = re.search(regex_pattern, response)
            if match:
                output[output_key.lower()] = match.group(1)

        if not output:
            output = {"summary": response}

        return output
    
    def __call__(self, context: str, prompt: str=None, **kwargs):
        # Default prefix and suffix
        _prefix = 'Write a summary with of the following:'
        _suffix = 'Please following format:\n--\n\Format:\nSUMMARY: content summary.'
        
        prefix = _prefix if (not 'prefix' in kwargs) else kwargs['prefix']
        suffix = _suffix if (not 'suffix' in kwargs) else kwargs['suffix']

        # output_keys 
        _output_keys = ["SUMMARY"]
        output_keys = _output_keys if (not 'output_keys' in kwargs) else kwargs['output_keys']

        # Update prompt template
        if prompt:
            # NOTE: Update prompt about prefix
            prefix = prompt + "\n" + prefix

        # prompts  
        response = self.bot_chain.predict(prefix=prefix, context=context, suffix=suffix)

        # preprocessing output
        output = self.prep_output(response=response, output_keys=output_keys)

        return output
