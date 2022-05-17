# Inicio #
# ler (A, B) #
# Se (A=B) Então#
# Exibir("Os numeros São Iguais") #
# Se (A>B)Então #
#      Exibir(A) #
# Senão #
#      Exibir(B) #
# Fim Se #
# FIM #

a = int(input(" Digite A: "))
b = int(input(" Digite B: "))

if a == b :
    print(" Os numeros são iguais ", a)
elif a > b :
    print (" A informação a é maior ", a) 
else:
    print(" A informação b é maior ", b)    