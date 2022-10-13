//A interesting game of Snake Water & Gun

#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int snakewatergun(char you, char comp) //this function takes My char and Comps char
{                                      
    if (you == comp)
    {
        return 0;
    }
    if (you == 'g' && comp == 's')
    {
        return 1;
    }
    else if (you == 's' && comp == 'g')
    {
        return -1;
    }
    if (you == 's' && comp == 'w')
    {
        return 1;
    }
    else if (you == 'w' && comp == 's')
    {
        return -1;
    }
    if (you == 'g' && comp == 'w')
    {
        return -1;
    }
    else if (you == 'w' && comp == 'g')
    {
        return 1;
    }
}
int main()
{
    char you, comp;
    srand(time(0));
    int number = rand() & 100 + 1; 
    if (number < 33)
    {
        comp = 's';
    }
    else if (number > 33 && number < 66) 
    {
        comp = 'w';
    }
    else
    {
        comp = 'g';
    }
    printf("Enter 's' for snake, 'w' for water, 'g' for gun\n");
    scanf("%c", &you);
    int turn = snakewatergun(you, comp);
    printf("You choose %c and Computer choose %c :", you, comp);
    if (turn == 1)
    {
        printf("You Win!\n");
    }
    else if (turn == 0)
    {
        printf("Game Draw!\n");
    }
    else
    {
        printf("You Lost!\n");
    }

    return 0;
}
