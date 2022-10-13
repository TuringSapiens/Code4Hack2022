import java.util.Scanner;

public class array2 {
    public static void main(String[] args) {
        int[] arr = new int[10];
        Scanner in = new Scanner(System.in);
        //input
        System.out.println("Enter values:");
        for (int i = 0; i < arr.length; i++) {
            arr[i] = in.nextInt();
        }
        int m = arr.length / 2;
        int n = arr.length - m;
        int[] arr2 = new int[m];
        int[] arr3 = new int[n];
        for (int i = 0; i < arr.length; i++) {
            if(i < m) {
                arr2[i] = arr[i];
            }
            else if(i >= m) {
                int j=0;
                arr3[j]=arr[i];
                j++;
            }
        }
        array2 ob=new array2();
        ob.Display(arr);
        ob.Display(arr2);
        ob.Display(arr3);

    }

    void Display(int arr[]) {
        System.out.println("values:");
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i]+" ");
        }
        System.out.println("");
    }
}
