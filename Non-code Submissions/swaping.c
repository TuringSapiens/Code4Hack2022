/* Program to swap numbers using pointers */

#include<stdio.h>
#include<stdlib.h>

void swap(int *p,int *q);

void main()
{
	int num1,num2;
	printf("Enter the 2 numbers:");
	scanf("%d%d",&num1,&num2);
	printf("Before Swaping:\nNum1=%d\tNum2=%d",num1,num2);
	swap(&num1,&num2);
	printf("After Swaping:\nNum1:%d\tNum2=%d",num1,num2);
}

void swap(int *p,int *q)
{
	int temp;
	temp=*p;
	*p=*q;
	*q=temp;
}
