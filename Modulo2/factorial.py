# Ler(A) #
# Cont=1 #
# Fatorial=A #
# Enquanto (Cont<A) Faça #
    # Fatorial=Fatorial*(A-Cont) #
    #  Cont=Cont+1  #
# Fim Enquanto #
# Exibir(fatorial) #

num = int(input(" Digite o numero: "))
rep = 1
factorial = num
while rep < num :
    factorial= factorial * (num - rep)
    rep = rep +1
print(" O fatorial de", num, "é", factorial)    