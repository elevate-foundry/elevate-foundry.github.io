# Vincent API request for magic link
import requests

headers = {
    # Already added when you pass json=
    # 'Content-Type': 'application/json',
}

json_data = {}

response = requests.post('https://realquickapp.stradum-dev.io/api/v1/transactions', headers=headers, json=json_data)
response.text
