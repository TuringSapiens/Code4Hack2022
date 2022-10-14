/*C program to find the factorial of numbers*/
#include<stdio.h>
int factorial(int n);
int main()
{   
    int n,f;
    printf("Enter the number you want to generate the factorial\n");
    scanf("%d",&n); 
    f=factorial(n);
    printf("The factorial of %d is %d",n,f);
}
int factorial(int n)
{   
    int f;
    if(n==1)
    return(1);
    else
    f=n*factorial(n-1);
    return(f);
}
