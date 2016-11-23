class CommentsController < ApplicationController
  before_action :set_slide

  def create
    @comment = Comment.new(comment_params)

    respond_to do |format|
      if @comment.save
        format.html { redirect_to slide_path(@slide) }
        format.js
      else
        redirect_to slide_path(@slide), alert: 'Comment can\'t be created'
      end
    end
  end

  private

  def set_slide
    @slide = Slide.find(params[:slide_id])
  end

  def comment_params
    params.require(:comment).permit(:content, :name).merge(slide: @slide)
  end
end
