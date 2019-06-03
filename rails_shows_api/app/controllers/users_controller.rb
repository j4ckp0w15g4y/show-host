class UsersController < ApplicationController
def index
    @users = User.all
    render json: @users, status: :ok
  end

def show
    @user = User.find(params[:id])
    @gigs = @user.gigs
    render json: @gigs, include: :users, status: :ok
  end

# def show 
#     @user = User.find(params[:id])
#     render json: @user, status: :ok
# end 





  def create 
  end 
  def update
  end 
  def destroy 
  end 
end 