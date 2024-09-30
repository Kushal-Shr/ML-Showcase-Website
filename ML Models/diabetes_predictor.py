# This is a code for WebApp for predicting if you have diabetes or not.

import pickle
import streamlit as st
with open('diabetes_predictor.pickle', 'rb') as file:
    model = pickle.load(file)

print(model)

st.title('Diabetes Predictor')

pregnancies = st.number_input(label ='Enter how many times did you get pregnant: ')
glucose = st.number_input(label = 'Enter your Glucose level: ')
bp = st.number_input(label = 'Enter your Diastolic Blood Pressure(mm Hg): ')
skinthickness = st.number_input(label = 'Enter the Thickness of your skin(mm): ')
insulin = st.number_input(label = 'Enter your insulin level(muU/ml): ')
BMI = st.number_input(label = 'Enter your BMI(weight in kg/(height in m)^2): ')
diabetespedigreefunction = st.number_input(label = 'Enter your Diabetes Pedigree Function: ')
Age = st.number_input(label = 'Enter you age(years): ')

if st.button('Submit / Check'):
    
    y_pred = model.predict([[pregnancies, glucose, bp, skinthickness, insulin, BMI, diabetespedigreefunction, Age]])
    if y_pred == 0:
        st.write('The Patient doesn\'t have Diabetes.')
    else:
        st.write('The Patient has Diabetes.')