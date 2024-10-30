import React from 'react'
import { CustomImages } from './styles'

import Alimentacao from '../../../../assets/CategoriaDespesas/alimentacao.png'
import Educacao from '../../../../assets/CategoriaDespesas/educacao.png'
import Lazer from '../../../../assets/CategoriaDespesas/lazer.png'
import Moradia from '../../../../assets/CategoriaDespesas/moradia.png'
import Saude from '../../../../assets/CategoriaDespesas/saude.png'
import Streams from '../../../../assets/CategoriaDespesas/streams.png'
import Transporte from '../../../../assets/CategoriaDespesas/transporte.png'
import CategoriaInput from '../../../../assets/InputIconDespesas/CategoriaIcon.png'
import DateInput from '../../../../assets/InputIconDespesas/DateIcon.png'
import DescricaoInput from '../../../../assets/InputIconDespesas/DescricaoIcon.png'

const images = {
  ALIMENTACAO: Alimentacao,
  EDUCACAO: Educacao,
  LAZER: Lazer,
  MORADIA: Moradia,
  SAUDE: Saude,
  STREAMS: Streams,
  TRANSPORTE: Transporte,
  CATEGORIA: CategoriaInput,
  DATE: DateInput,
  DESCRICAO: DescricaoInput,
}

export const ListImages = ({ type, ...props }) => {


  return (
    <CustomImages source={images[type]} {...props} />
  )
} 