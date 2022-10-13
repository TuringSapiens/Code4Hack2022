// selection sort
#include <bits/stdc++.h>
using namespace std;

void swap(int *xp, int *yp)
{
	int temp = *xp;
	*xp = *yp;
	*yp = temp;
}

void selectionSort(int arr[], int n)
{
	int i, j, min_idx;

	
	for (i = 0; i < n-1; i++)
	{
	
	
		min_idx = i;
		for (j = i+1; j < n; j++)
		if (arr[j] < arr[min_idx])
			min_idx = j;

	
		if(min_idx!=i)
			swap(&arr[min_idx], &arr[i]);
	}
}

void printArray(int arr[], int size)
{
	int i;
	for (i=0; i < size; i++)
		cout << arr[i] << " ";
	cout << endl;
}


int main()
{
  int arr[5];
  cout<<"Enter 5 Numbers-";
  for(int i=0;i<5;i++)
  {
    cin>>arr[i];
  }
	int n = sizeof(arr)/sizeof(arr[0]);
	selectionSort(arr, n);
	cout << "Sorted array: \n";
	printArray(arr, n);
	return 0;
}
 
