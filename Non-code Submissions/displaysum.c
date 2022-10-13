#include <stdio.h>
int display(int n);
int main(int n){
    display(5);
    printf("\b\b=%d\n\n\n",display(n));
}
int display(int n) 
{
    int sum;
    if (n==0)
    return 0;
    sum=n+display(n-1);
    printf("%d+",n);
    return sum;
    }