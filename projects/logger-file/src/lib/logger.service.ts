import { Injectable } from '@angular/core';
import { environmentvalues } from '../../../../src/app/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  private logs : string[] = [];

  constructor(private _http:HttpClient) {  }
  log(message : any){
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] ${message}`;
    this.logs.push(logEntry);
  }

  updateMyLog(message:any){
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] ${message}`;
    console.log(logEntry);
    this.logs.push(logEntry);
    console.log(this.logs);
    this._http.put(environmentvalues.external_logupdate_url, this.logs);
  }

  downloadLogs() {
    const logContent = this.logs.join('\n');
    const blob = new Blob([logContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'app_logs.txt';
    a.click();

    URL.revokeObjectURL(url);
  }
}
