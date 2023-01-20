import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatorRoutingModule } from './creator-routing.module';
import { CreatorComponent } from './creator.component';
import { LayoutCreatorComponent } from './components/layout-creator/layout-creator.component';
import { TDSAvatarModule } from 'tds-ui/avatar';
import { TDSDropDownModule } from 'tds-ui/dropdown';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { StudioComponent } from './pages/studio/studio.component';
import { ModalAcceptCreateGameComponent } from './components/modal-accept-create-game/modal-accept-create-game.component';
import { ModalAddMediaComponent } from './components/modal-add-media/modal-add-media.component';
import { GameComponent } from './components/game/game.component';
import { TDSFormFieldModule } from 'tds-ui/form-field';
import { TDSInputModule } from 'tds-ui/tds-input';
import { TDSButtonModule } from "tds-ui/button";
import { ReportLastestComponent } from './components/report-lastest/report-lastest.component';
import { TDSBreadCrumbModule } from 'tds-ui/breadcrumb';
import { ReactiveFormsModule } from '@angular/forms';
import { TDSMessageService } from 'tds-ui/message';
import { TDSModalModule } from 'tds-ui/modal';
import { QuestionComponent } from './components/question/question.component';
import { TDSTabsModule } from 'tds-ui/tabs';



@NgModule({
  declarations: [
    CreatorComponent,
    LayoutCreatorComponent,
    DashboardComponent,
    StudioComponent,
    ModalAcceptCreateGameComponent,
    ModalAddMediaComponent,
    GameComponent,
    ReportLastestComponent,
    QuestionComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CreatorRoutingModule,
    TDSAvatarModule,
    TDSDropDownModule,
    TDSFormFieldModule,
    TDSInputModule,
    TDSButtonModule,
    TDSBreadCrumbModule,
    TDSModalModule,
    TDSTabsModule
  ],
  providers:[
    TDSMessageService
  ]
})
export class CreatorModule { }
