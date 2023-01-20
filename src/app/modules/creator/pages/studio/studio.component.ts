import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { TDSModalRef, TDSModalService } from 'tds-ui/modal';
import { ModalAcceptCreateGameComponent } from '../../components/modal-accept-create-game/modal-accept-create-game.component';
import { ModalAddMediaComponent } from '../../components/modal-add-media/modal-add-media.component';

@Component({
  selector: 'tmt-ghub-studio',
  templateUrl: './studio.component.html',
  styleUrls: ['./studio.component.scss'],
  host: { class: "flex flex-col overflow-hidden w-full h-full" }
})
export class StudioComponent implements OnInit {

  constructor(
    private modalService: TDSModalService,
    private viewContainerRef: ViewContainerRef
  ) { }

  lstQuestion: number[] = [];
  number:number = 0;
  ngOnInit(): void {
  }

  createGame() {
    const modal = this.modalService.create({
      title: "",
      size: "md",
      width: "768px",
      content: ModalAcceptCreateGameComponent,
      footer: null,
      viewContainerRef: this.viewContainerRef,
      componentParams: {
      }
    });
  }

  addMedia() {
    const modal = this.modalService.create({
      title: "",
      size: "xl",
      content: ModalAddMediaComponent,
      viewContainerRef: this.viewContainerRef,
      componentParams: {
      }
    });
  }

  addQuestion() {
    this.lstQuestion.push(this.number);
    this.number++;
  }
}
