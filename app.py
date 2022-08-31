from flask import Flask, request, jsonify
from flask_cors import CORS
<strong>#Set up Flaskstrong>:
app = Flask(__name__)
<strong>#Set up Flask to bypass CORSstrong>:
cors = CORS(app)
#Create the receiver API POST endpoint:
@app.route("/receiver", methods=["POST"])
def postME():
   data = request.get_json()
   data = jsonify(data)
   return data
if __name__ == "__main__": 
   app.run(debug=True)
   
# Vincent API request for magic link
# import requests

# headers = {
#     # Already added when you pass json=
#     # 'Content-Type': 'application/json',
# }

# json_data = {}

# response = requests.post('https://realquickapp.stradum-dev.io/api/v1/transactions', headers=headers, json=json_data)
# response.text
