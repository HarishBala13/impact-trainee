import { Injectable } from '@angular/core';
import { environmentvalues } from '../../../../src/app/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  private logs: string[] = [];
  name: string | undefined | null = '';

  constructor(private _http: HttpClient) {
    this.name = sessionStorage.getItem('currentUserName');
  }

  informationMessage(message: any, messagetype: string, messageDate: string) {
    this.activateLogger(message, messagetype, messageDate);
  }

  activateLogger(
    logMessage: string,
    logMessagetype: string,
    logMessageDate: string
  ) {
    logMessage = logMessage + ' component initialized for User ' + this.name;
    const messageObject = {
      logMessage: logMessage,
      logMessagetype: logMessagetype,
      logMessageDate: logMessageDate + 'componenet initialized for User',
    };
    this.newFunction(
      environmentvalues.external_logupdate_url,
      messageObject
    ).subscribe(() => {});
  }

  newFunction(url: string, messageDetails: any) {
    return this._http.post(url, messageDetails);
  }

  log(message: any) {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] ${message}`;
    this.logs.push(logEntry);
  }

  updateMyLog(message: any) {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] ${message}`;
    // console.log(logEntry);
    this.logs.push(logEntry);
    // console.log(this.logs);
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
