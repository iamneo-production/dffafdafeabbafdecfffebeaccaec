import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  errorMessage: string="";

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Retrieve the error message from the route data
    this.errorMessage = this.route.snapshot.data['message'];
  }
}
