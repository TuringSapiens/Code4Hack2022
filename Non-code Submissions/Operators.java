public class Operators {

    public static void main(String[] args) {
       
        int result = 1 + 2;  // 1 + 2 = 3
        System.out.println("1 + 2 = " +  result);
        int previousresult = result;
        System.out.println("previous result = "  + previousresult);
        result = result - 1 ;
        System.out.println("3 - 1 = "  + result);
        System.out.println("previous result = "  + previousresult);
        
        result = result * 10 ;// 2 * 10 = 20
        System.out.println("2 * 10 " + result );
        result = result / 5 ; // 20 / 5 = 4 
        System.out.println("20 / 4 = " + result);
        result = result % 3 ;// the remainder of of (4 % 3 = 1 )
        System.out.println("4 % 3 = " + result);

         // result = result + 1 
         result++;//1+1 = 2
         System.out.println(result);
         result--;//2 - 1 = 1 
         System.out.println(result);
        
         // result = result + 2 
        result += 2; // 1 + 2 = 3 
        System.out.println(result);
        result*= 10 ; 
        System.out.println(result);
        result/= 3 ; 
        System.out.println(result);
        result-= 2 ; 
        System.out.println(result);
        System.out.println("10 - 2 = " + result);
        boolean isAlien = false;

         if ( isAlien == false) {
         System.out.println("It is not an Alien!");
         System.out.println("It is not a fucking Alien! " ); }

        
         int topScore = 100;
         if ( topScore == 100 ) 
         System.out.println(" You got the highest Score! "); 
         
        int secondtopscore = 80 ;
        if ( (topScore > secondtopscore )  && ( secondtopscore < 100 )  ) {
            System.out.println( " Greater than second top score and less than 100");
        }
        
        if ((topScore > 90 ) || secondtopscore <= 90  ){
            System.out.println("Either or both of the conditions are true");}
         
        int newvalue = 50;
        if ( newvalue == 50 ){
            System.out.println("this is and error");
        }
         boolean iscar = true ; 
         if (iscar){
            System.out.println("this is not supposed to happen ");
         }
         boolean wascar = iscar ? true : false ; 
         if (wascar) {
            System.out.println("wascar is true");
         }

       




      
        
    
         

            

    
    }
    
}
