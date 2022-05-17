from re import A
from sqlite3 import paramstyle


#Ler(A)
#Caracteres=0
#Para cada caracter de A, FaçA
    #Caracteres=caracteres+1
#Fim Para
#Exibir Caracteres
#Fim

texto = input(' Digite um Texto ou Palavra: ')
caracteres = 0

for char in  texto:
    caracteres = caracteres + 1
    
print(" Esse texto tem:  ",caracteres, "caracteres.")
