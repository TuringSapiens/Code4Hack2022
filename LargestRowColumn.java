import java.util.Scanner;
public class LargestRowColumn {

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
    public static void largestRowColumn(int[][] a)
    {
        int sum=0;
        String str="row"; int index=-1;
        for (int x = 0; x < a[0].length; x++)
        {
            int s=0;
            for (int y = 0; y < a.length; y++)
            {
                s+=a[x][y];
            }
            if(s>sum)
            {
                sum=s;
                index=x;
            }
        }
        for (int x = 0; x < a.length; x++)
        {
            int s=0;
            for (int y = 0; y < a[0].length; y++)
            {
                s+=a[y][x];
            }
            if(s>sum)
            {
                sum=s;
              str="column";
                index=x;
            }
        }

       System.out.println(str+" "+index+" "+sum);

    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        for (int x = 1; x <= t; x++) {
            int a[][] = input();
            largestRowColumn(a);
        }
    }
    
}
