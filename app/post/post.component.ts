import {Component}  from '@angular/core';
import {PostListComponent} from './post-list.component';
import {PostService} from './post.service';

@Component({
    selector: 'post-parent',
    template: `
        <h2>View User List</h2>
        <post-list></post-list>
    `,
    directives: <any>[PostListComponent],
    providers: <any>[PostService]
})
export class PostComponent {
}
