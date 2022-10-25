import java.util.Scanner;
public class PrintSpiral {
    public static int[][] input() {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        int c[][] = new int[a][b];

        for (int x = 0; x < a; x++) {
            for (int y = 0; y < b; y++) {
                c[x][y] = sc.nextInt();
            }
        }
        return c;
    }

    public static void printSpiral1(int a[][] )
    {
        int top=0, down=a.length-1, left=0, right=a[0].length-1, dir=0;
        while(top<=down && left <= right)
        {
            if(dir==0)
            {
                for(int i=left; i<=right; i++)
                {
                    System.out.print(a[top][i]+" ");
                    
                }
                top++;
            }
            else if(dir==1)
            {
                for(int i=top; i<=down; i++)
                {
                System.out.print(a[i][right]+" ");
                  
                } 
                right--;
            }
            else if(dir==2)
            {
                for(int i=right; i>=left ; i--)
                {
                    System.out.print(a[down][i]+" ");
                   
                }
                down--;
            }
            else if(dir==3)
            {
                for(int i=down; i>=top ; i--)
                {
                    System.out.print(a[i][left]+" ");
                    
                }
                left++;
            }
            dir =(dir+1)%4;
        }


    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        for (int x = 1; x <= t; x++) {
            int a[][] = input();
            printSpiral1(a);
        }
    }
}
