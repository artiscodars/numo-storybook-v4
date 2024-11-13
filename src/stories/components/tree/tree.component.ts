import { CommonModule } from "@angular/common";
import { ChangeDetectorRef, Component, Input } from "@angular/core";
import { MessageService, TreeNode } from "primeng/api";
import { ToastModule } from "primeng/toast";
import { TreeModule } from "primeng/tree";

@Component({
    selector: "p-tree-wrapper",
    templateUrl: "./tree.component.html",
    standalone: true,
    imports: [TreeModule, ToastModule,CommonModule],
    providers: [MessageService],
})
export class TreeComponent {
    @Input() files!: TreeNode[];
    @Input() selectedFile!: TreeNode;
    @Input() events: boolean = false;
    @Input() lazyLoading: boolean = false;
    @Input() virtualScroll: boolean = false;

    constructor(private messageService: MessageService,private cd: ChangeDetectorRef) {}

    loading: boolean = false;

    nodes!: TreeNode[];

    nodes2!: TreeNode[]; 
    ngOnInit() {
        this.loading = true;
        this.nodes2 = this.initiateNodes2();

        setTimeout(() => {
            this.nodes = this.initiateNodes();
            this.loading = false;
            this.nodes2.map((node) => (node.loading = false));
            this.cd.markForCheck();
        }, 2000);
        this.files = this.duplicateData(this.files, 50);
        this.cd.markForCheck();
    }
    
    duplicateData(data: TreeNode[], count: number): TreeNode[] {
        let duplicatedData: TreeNode[] = [];
        for (let i = 0; i < count; i++) {
            duplicatedData = [...duplicatedData, ...data.map((item) => ({ ...item }))];
        }
        return duplicatedData;
    }
    nodeExpand(event: any) {
        this.messageService.add({
            severity: "success",
            summary: "Node Expanded",
            detail: event.node.label,
        });
    }

    nodeCollapse(event: any) {
        this.messageService.add({
            severity: "warn",
            summary: "Node Collapsed",
            detail: event.node.label,
        });
    }

    nodeSelect(event: any) {
        this.messageService.add({
            severity: "info",
            summary: "Node Selected",
            detail: event.node.label,
        });
    }

    nodeUnselect(event: any) {
        this.messageService.add({
            severity: "info",
            summary: "Node Unselected",
            detail: event.node.label,
        });
    }
    initiateNodes(): TreeNode[] {
        return [
            {
                key: '0',
                label: 'Node 0',
                leaf: false
            },
            {
                key: '1',
                label: 'Node 1',
                leaf: false
            },
            {
                key: '2',
                label: 'Node 2',
                leaf: false
            }
        ];
    }

    initiateNodes2(): TreeNode[] {
        return [
            {
                key: '0',
                label: 'Node 0',
                leaf: false,
                loading: true
            },
            {
                key: '1',
                label: 'Node 1',
                leaf: false,
                loading: true
            },
            {
                key: '2',
                label: 'Node 2',
                leaf: false,
                loading: true
            }
        ];
    }

    onNodeExpand(event: any) {
        if (!event.node.children) {
            this.loading = true;

            setTimeout(() => {
                let _node = { ...event.node };
                _node.children = [];

                for (let i = 0; i < 3; i++) {
                    _node.children.push({
                        key: event.node.key + '-' + i,
                        label: 'Lazy ' + event.node.label + '-' + i
                    });
                }

                this.nodes[parseInt(event.node.key, 10)] = _node;

                this.loading = false;
                this.cd.markForCheck();
            }, 500);
        }
    }

    onNodeExpand2(event: any) {
        if (!event.node.children) {
            event.node.loading = true;

            setTimeout(() => {
                let _node = { ...event.node };
                _node.children = [];

                for (let i = 0; i < 3; i++) {
                    _node.children.push({
                        key: event.node.key + '-' + i,
                        label: 'Lazy ' + event.node.label + '-' + i
                    });
                }

                const key = parseInt(_node.key, 10);
                this.nodes2[key] = { ..._node, loading: false };
                this.cd.markForCheck();
            }, 500);
        }
    }
}

 