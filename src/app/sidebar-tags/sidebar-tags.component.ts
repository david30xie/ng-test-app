import { Component, OnInit } from '@angular/core';

import { Tag } from '../models';
import { TagsService } from '../tags.service';

@Component({
  selector: 'app-sidebar-tags',
  templateUrl: './sidebar-tags.component.html',
  styleUrls: ['./sidebar-tags.component.css']
})
export class SidebarTagsComponent implements OnInit {
  tags: Tag [] = [];

  constructor(private tagsService: TagsService) {}

  ngOnInit(): void {
    this.tagsService.getAllTags()
    .then(tags => {
      this.tags = tags;
    });
  }

}
