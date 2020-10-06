import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Rental } from '../shared/rental.model'
import { RentalService } from '../shared/rental.service';

@Component({
  selector: 'app-rental-create',
  templateUrl: './rental-create.component.html',
  styleUrls: ['./rental-create.component.scss']
})
export class RentalCreateComponent implements OnInit {

  newRental: Rental
  rentalCategories = Rental.CATEGORIES
  errors: any[] = []

  constructor(private rentalService: RentalService) { }

  handleImageChange() {
    this.newRental.image = 'https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/5/image.jpeg'
  }

  ngOnInit() {
    this.newRental = new Rental()
    this.newRental.shared = false
  }

  creteRental() {
    console.log(this.newRental)
    this.rentalService.createRental(this.newRental).subscribe(
      (createdRental) => {
        console.log(createdRental)
      },
      (errorResponse: HttpErrorResponse) => {
        console.log(errorResponse.error)
        // this.errors = errorResponse.error.errors
      }
    )
  }

}
