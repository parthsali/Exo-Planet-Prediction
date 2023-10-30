# flask server code starter 

from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib



# init app
app = Flask(__name__)
CORS(app, origins=['http://localhost:5173'])

# load model
# model = joblib.load('model.pkl')

# load model
model = joblib.load('model.joblib')




#route for home page
@app.route('/', methods=['GET'])
def get():
    return jsonify({'msg': 'Hello World!'})

@app.route('/api/predict', methods=['GET'])
def get_api():
    return jsonify({'msg': 'Hello World!'})

@app.route('/api/predict', methods=['POST'])
def predict():
    data = request.get_json()
    
    res = model.predict(data)
    print(res)
   
    return jsonify(res.tolist())


# run server
if __name__ == "__main__":
    app.run(debug=True)
