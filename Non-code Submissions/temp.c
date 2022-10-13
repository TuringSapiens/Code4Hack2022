#include <stdio.h>
int main()
{
    int F,C;
    printf("Please Enter Farenhite=");
    scanf("%d", &F);
    C = (F-32)/1.8;
    printf("%d Farenhite= %d C",F,C);
    return 0;
}