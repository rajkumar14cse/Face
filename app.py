import subprocess
from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')  # Set the home page
def home():
    return render_template('index.html')

@app.route('/Contact')
def contact():
    return render_template('Contact.html')

@app.route('/About')    
def about():
    return render_template('About.html')

@app.route('/run', methods=['POST'])
def run():
    try:
        result = subprocess.run(["python", "main.py"], capture_output=True, text=True)
        return jsonify({"status": "success", "output": result.stdout})
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)})

if __name__ == '__main__':
    app.run(debug=True)
