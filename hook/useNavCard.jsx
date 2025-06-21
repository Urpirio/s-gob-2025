'use client';
import { DataCardComentarios } from "../components/components - Home/data/DataCardComentarios";

export const useNavCard = () => {

    const Navigate = ({Right,Left}) => {
      const CardContainer = document.getElementById('CardContainer');
      if(CardContainer.scrollLeft === 0 &&Right){
        CardContainer.scrollTo({left: 300, behavior: 'smooth'});
      }else if(CardContainer.scrollLeft === 300 && Right){
        CardContainer.scrollTo({left: 600, behavior: 'smooth'});
      }else if(CardContainer.scrollLeft === 600 && Right){
        CardContainer.scrollTo({left: 0, behavior: 'smooth'});

      }else if(CardContainer.scrollLeft === 0 && Left){
        CardContainer.scrollTo({left: 600, behavior: 'smooth'});
      }else if(CardContainer.scrollLeft === 300 && Left){
        CardContainer.scrollTo({left: 0, behavior: 'smooth'});
      }else if(CardContainer.scrollLeft === 600 && Left){
        CardContainer.scrollTo({left: 300, behavior: 'smooth'});
      }
    };

    return ({
        Navigate
    })
}