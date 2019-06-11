import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
    public server = 'https://api.mlab.com/';
    public apiUrl = 'api/1/databases/todo2019/collections/';
    public key = 'apiKey=ZpsCBHQKrZOUz1XqjAseP7tFzPcuO7vC'
    public serverWithApiUrl = this.server + this.apiUrl;
}
