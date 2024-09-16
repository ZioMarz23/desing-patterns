import { YoutubeChannel } from "./Observable";
import { Suscriber } from "./Observer";


const ch1 = new YoutubeChannel();
const s1 = new Suscriber(ch1);
const s2 = new Suscriber(ch1);
const s3 = new Suscriber(ch1);

ch1.attach(s1);
ch1.attach(s2);
ch1.attach(s3);

ch1.addNewVideo('Best Waifus 2024');