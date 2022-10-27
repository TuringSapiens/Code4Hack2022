import java.util.Scanner;

class BinarySearch{

    public static int[] input()
    {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int a[] = new int[n];
        for(int x=0 ; x<a.length ; x++)
        {
            a[x] = sc.nextInt();
        }
        return a;
    }
    
    public static int binarySearch(int[] a, int x)
    {
        int start = 0, end = a.length-1;
        while(start<=end){
            int mid = (start+end)/2;

            if(a[mid] == x)
            return mid;
            else if(x>a[mid])
            start = mid+1;
            else 
            end = mid-1;
        }
        return -1;
    }
   
    
    public static void main(String[] args)
    {
        Scanner sc = new Scanner(System.in);
        int a[] = input();
        int t = sc.nextInt();
        for(int x=1 ; x<=t ; x++)
        {
            
            int n = sc.nextInt();
           
            System.out.println(binarySearch(a,n));
            
        }
    }
}
