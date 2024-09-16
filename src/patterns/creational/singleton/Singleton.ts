//The Singleton pattern is a creational design pattern that restricts the instantiation of a class 
//to a single instance and provides a global access point to that instance.

export class Singleton {

    //Instance is what will mark whether the class itself is already instantiated or not.
    private static instance: Singleton;

    //This prevents new instances of the class from being created from outside the class itself.
    private constructor(){}

    //Checks if the instance of the Singleton class has not been created yet.
    //If not created, creates a new one, otherwise, returns the instance already created
    public static getInstance():Singleton {

        if( !Singleton.instance ){
            Singleton.instance = new Singleton();
        }

        return Singleton.instance;
    } 
}
