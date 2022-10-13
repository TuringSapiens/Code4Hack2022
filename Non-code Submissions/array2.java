public class lab6 {
    public static void main(String[] args) {
        String S1="HEY";
        String S2=new String();
        S2="HI";
        // mutability and immutability
        StringBuffer S3=new StringBuffer("Namaste");
        S1="Kunal";
        S2=S2+"Kunal";
        S3.append("Java");
        System.out.println(S1);
        System.out.println(S2);
        System.out.println(S1.charAt(5));
        System.out.println(S3.charAt(8));
        //concatenation
        S1=S2+S3;
        System.out.println(S1);
        System.out.println(S1+"Java");
    }


}
