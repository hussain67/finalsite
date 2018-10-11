import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints'


export default class RevealOnScroll {
    constructor(element, offset ){
        //this.itemsToReveal = $(".feature-item, .testimonial");
        this.itemsToReveal = element;
        this.offset = offset;
        this.hideInitially();
        this.createWaypoints();

    }

    hideInitially(){
        this.itemsToReveal.addClass("reveal-item");
    }

    createWaypoints(){
        var that = this;
        this.itemsToReveal.each(function(){
           let currentItem = this;
           new Waypoint ({
               element:currentItem,
               handler: function(){
                   $(currentItem).addClass("reveal-item--is-visible")
               },
               offset: that.offset

           });
        });
    }

}