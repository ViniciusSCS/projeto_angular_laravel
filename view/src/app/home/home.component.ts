import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    public url: string = "/sobre"

    constructor() {
    }

    ngOnInit(): void {
    }

    public produtos = [
        {
            titulo: 'Produto 1',
            descricao: 'Desc. Produto 1'
        },
        {
            titulo: 'Produto 2',
            descricao: 'Desc. Produto 2'
        },
        {
            titulo: 'Produto 3',
            descricao: 'Desc. Produto 3'
        },
        {
            titulo: 'Produto 4',
            descricao: 'Desc. Produto 4'
        },
        {
            titulo: 'Produto 5',
            descricao: 'Desc. Produto 5'
        }
    ]

    exibeAlerta(evento){
        alert("OK")
    }


}
