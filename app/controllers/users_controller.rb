class UsersController < ApplicationController
def index
    @users = User.all
    render json: @users, include: :gigs, status: :ok
  end

def show
    @user = User.find(params[:id])
    render json: @user, include: :gigs, status: :ok
  end

  def create 
  end 
  def update
  end 
  def destroy 
  end 
end 