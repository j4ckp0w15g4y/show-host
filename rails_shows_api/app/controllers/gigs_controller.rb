class GigsController < ApplicationController
    def index
        @gigs = Gig.all
        render json: @gigs, status: :ok
      end

      def show 
        @gig = Gig.find(params[:id])
        render json: @gig, status: :ok
    end 

    def create
        @gig = Gig.new(params.require(:gig).permit(:name, :date, :location, :event_info, :tickets_url, :image_url))
        
        if @gig.save
          render json: @gig, status: :created
        else
          render json: { errors: @gig.errors }, status: :unprocessable_entity
        end
      end




      def update
      end 
      def destroy 
      end 
    end 