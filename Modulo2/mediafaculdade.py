# Inicio #
# ler(prova1,trab,porva2) #
# MEDIA = (prova1*2+trab+(porva2*2)/5#
# Se MEDIA>=6 Então #
#      Exibir(" Aluno Aprovado") #
# Senão #
#      Exibir("Aluno Reprovado") #
# FIM #



prova1 = int(input(" Digite a nota Prova 1: "))
trab = int(input(" Digite a nota do  Trabalho: "))
prova2 = int(input(" Digite a nota Prova 2: "))

media = ((prova1 * 2) + trab + (prova2 * 2)) / 5

if media >= 6:
    print(" Aluno Aprovado")
else:
    if media >= 3:
        print(" Aluno em Recuperção ")
    else:    
        print(" Aluno Reprovado!!") 
