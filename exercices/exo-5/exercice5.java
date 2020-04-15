class Playground {
    public static void main(String[ ] args) {
        ConcertTicket museConcert = new ConcertTicket (100, "198", "02.04", "lea zaoui", "Muse");
        ConcertTicket redHotConcert = new ConcertTicket (99, "199", "03.04", "lea zanon", "Red hot");
        System.out.println(museConcert.concertDetails());
        System.out.println(redHotConcert.concertDetails());
    }
}

class ConcertTicket {
      public int price ;
      public String placeNumber ;
      public String date ;
      public String customer ;
      public String artistName="";

    public ConcertTicket (int price, String placeNumber,  String date , String customer){
        this.price = price;
        this.placeNumber = placeNumber;
        this.date = date;   
        this.customer = customer;
        }
        
    public ConcertTicket (int price, String placeNumber,  String date , String customer,String artistName){
        this(price, placeNumber, date, customer);
        // this.price = price;
        // this.placeNumber = placeNumber;
        // this.date = date;   
        // this.customer = customer;
        this.artistName = artistName;
        }
            
    public String concertDetails(){
         String concertVar = "<p>Price: "+ this.price + "</p> <p>Place number:"+ this.placeNumber + "</p> <p>Date du concert: " + this.date + "</p> <p>Customer name: "+ this.customer + "</p>";
             
        if(this.artistName !=""){
            
         concertVar += "<p> Nom de l'artiste :" + this.artistName + "</p>" ;  
        }
        return concertVar;
    }

}