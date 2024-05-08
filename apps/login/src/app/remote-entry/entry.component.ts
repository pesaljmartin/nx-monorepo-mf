import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent],
  selector: 'nx-monorepo-mf-login-entry',
  template: `<nx-monorepo-mf-nx-welcome></nx-monorepo-mf-nx-welcome>`,
})
export class RemoteEntryComponent {}
