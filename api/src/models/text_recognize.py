import torch

from src.models.strhub.data.module import SceneTextDataModule
from src.models.strhub.models.utils import load_from_checkpoint

class TextRecognitionParseq:
    def __init__(self, model_path: str, threshold: float):
        self.device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
        self.trained_model = model_path
        self.parseq, self.img_transform = self._load_model()
        self.threshold = threshold
        
    def _load_model(self):
        parseq = load_from_checkpoint(self.trained_model).eval().to(self.device)
        img_transform = SceneTextDataModule.get_transform(parseq.hparams.img_size)
        return parseq, img_transform
    
    def predict(self, image):
        
        image = self.img_transform(image).unsqueeze(0).to(self.device)
        p = self.parseq(image).softmax(-1)
        pred, p = self.parseq.tokenizer.decode(p)

        return pred[0]
    