class CategoriesController < ApplicationController
  def index
    @categories = Category.all
    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @categories}
    end
  end

  def create
    @category = Category.new(category_params)
    if @category.save
      render json: @category
    else
      render json: { errors: @category.errors.full_messages }, status: 422 
    end
  end

  def destroy
    @category = Category.find(params[:id])
    @category.destroy
    render json: { status: 200 }
  end

  private
    def category_params
      params.require(:category).permit!
    end
end