import { LightningElement } from 'lwc';
import imageRahul from '@salesforce/resourceUrl/imageRahul';
import imageRohit from '@salesforce/resourceUrl/imageRohit';
import imageVirat from '@salesforce/resourceUrl/imageVirat';
export default class PlayersInfo extends LightningElement {

    playersLst = [{
        id: '1',
        Image: imageVirat,
        Name: 'VIRAT Kohli',
        description: 'Virat Kohli is an Indian international cricketer and the former captain of the India national team who plays as a right-handed batsman for Royal Challengers Bangalore in the IPL and for the Delhi in Indian domestic cricket.'
    }, {
        id: '2',
        Image: imageRohit,
        Name: 'ROHIT Sharma',
        description: 'Rohit Sharma is a gifted batsman and an immensely talented cricketer who is pleasing on the eye with his elegance and ability to time the ball. Each time Rohit Sharma walks out to bat, the word “talent” features more often than not amongst his fans and the cricketing circles.'
    }, {
        id: '3',
        Image: imageRahul,
        Name: 'Rahul',
        description: ' Rahul has taken gentle strides over the years and made a name for himself for being a consistent performer in the domestic circles.'
    }]


}