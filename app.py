from flask import Flask, request, jsonify
from flask_cors import CORS
<strong>#Set up Flaskstrong>:
app = Flask(__name__)
#Set up Flask to bypass CORS at the front end:
cors = CORS(app)
#Run the app:
if __name__ == "__main__":
     app.run()
