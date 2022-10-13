#include <stdio.h>
void summation(int n);
int main(){
summation(5);   
}
void summation(int n){
    if (n==0)
    return;
    printf("%d\n",n);
    summation(n-1);

}