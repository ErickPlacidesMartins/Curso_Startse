

# Ler (A)
# Se(A%2=0)Então
    # Exibir(A, " È Par")
# Senão
    # Exibir(A,"É Impar")
# Fim  

a = int(input(" Digite o numero para verificação:  ")) 

if a % 2 == 0 :
    print(" O numero é PAR!!")
elif a % 2 == 1:
    print(" O Numero é IMPAR!!!")