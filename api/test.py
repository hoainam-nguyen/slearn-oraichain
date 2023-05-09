import requests

TOKEN = "orai1zq8h079rzq6yrkklyhvlqz5t4h2s7w9plx2llq"

url = f"https://api.ai-market.dinohub.io/ai-market/services/d41d490e-4555-44eb-9a78-e5e2f6f71472/endpoints/a9c25f4b-e8d3-4a36-a2c9-949a5679c3ee/free?customer_token={TOKEN}"

payload = {"context": "Thủ đô của Việt Nam là gì?"}

headers = {
   'content-type': 'application/json'
}

response = requests.request("POST", url, headers=headers, data=payload)

print(response)
print(response.text)