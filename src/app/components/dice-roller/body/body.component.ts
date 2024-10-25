import { Component } from '@angular/core';
import { ResultsBarComponent } from '../results-bar/results-bar.component';
import { ResultsListComponent } from '../results-list/results-list.component';
import { ButtonComponent } from '../button/button.component';
import { RollService } from '../../../services/roll.service';
import { ModifierService } from '../../../services/modifier.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [
    ResultsBarComponent,
    ResultsListComponent,
    ButtonComponent,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css',
})
export class BodyComponent {
  username: string = '';

  constructor(
    private rollService: RollService,
    private modifierService: ModifierService,
    private authService: AuthService,
  ) {
    this.checkUser();
  }

  async checkUser() {
    const user = await this.authService.getAuthenticatedUser();

    if (user) {
      const username = user.getUsername();
      this.username =
        username.length > 15 ? username.slice(0, 15) + '...' : username;
    }
  }

  handleNewRollClick() {
    this.rollService.handleNewRollClick();
    this.modifierService.handleNewRollClick();
  }
}
