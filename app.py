from flask import Flask
from flask import render_template


app = Flask(__name__)

@app.route('/')
def index():
  return render_template('index.html', title='Home')

@app.route('/calculator')
def about():
  return render_template('calculator.html')

@app.route('/users')
def users():
    users = get_users()
    return render_template('users.html', users=users)


if __name__ == '__main__':
  app.run(host='0.0.0.0', port=5000, debug=True)



