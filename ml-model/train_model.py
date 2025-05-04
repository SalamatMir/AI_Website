# Example training code
from sklearn.linear_model import LogisticRegression
import joblib

X = [[0, 0], [1, 1]]
y = [0, 1]
model = LogisticRegression().fit(X, y)

# Save the model
joblib.dump(model, 'model.pkl')
